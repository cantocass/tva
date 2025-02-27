import { join, resolve } from 'node:path'
import { exec } from 'child_process'
import { execRead, getRootPath, logPromise } from '../../utils.mjs'
import { error } from '../../theme.mjs'

async function run(packages, options) {
  const rootPath = getRootPath()
  const downloadPath = resolve(rootPath, 'temp')

  await exec(`mkdir temp`, { cwd: rootPath })

  await packages.forEach(async (packageName) => {
    const packageDownloadName = `${packageName}_download`
    const localPackagePath = join(rootPath, `packages/${packageName}`)
    const filePath = join(downloadPath, `${packageDownloadName}.tgz`)
    const tempPackagePath = join(downloadPath, packageName)

    // Yarn doesn't provide a way to download tarballs, so we have to use NPM
    const url = await execRead(
      `npm view @pluralsight/${packageName}@${options.version} dist.tarball`
    )

    // Download packages from NPM
    try {
      await exec(`curl -L ${url} > ${filePath}`)
      await exec(`mkdir ${packageName}`, { cwd: downloadPath })
      await exec(`tar -xvzf ${filePath} -C ${tempPackagePath}`)
    } catch (err) {
      console.error(error(`Unable to download ${packageName} from NPM`))
      console.error(err)
    }

    // Move files to local workspaces
    try {
      await exec(`cp -rf ${tempPackagePath}/package/* ${localPackagePath}`)
    } catch (err) {
      console.error(
        error(
          `Unable to move ${packageName} from ${tempPackagePath} to ${localPackagePath}`
        )
      )
      console.error(err)
    }
  })
}

export default async function checkoutPackages(packages, options) {
  return logPromise(
    run(packages, options),
    `Checking out "next" from NPM version - ${options.version}`
  )
}
