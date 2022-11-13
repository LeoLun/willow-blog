import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'

export default async () => {

  // @TODO 遍历 pages 目录下全部 md 文件, 根据 git 记录生成创建时间和更新时间
  // https://github.com/Dream4ever/Knowledge-Base/issues/69

  const pages = []
  const rootPath = path.resolve(__dirname, "../../pages");
  const files = fs.readdirSync(rootPath);

  files.forEach(fileName => {
    if (path.extname(fileName) === ".md") {
      // 解析 frontmatter 数据
      const filePath = path.resolve(rootPath, `./${fileName}`);
      const content = fs.readFileSync(filePath, "utf-8");
      const { data } = matter(content);

      pages.push({
        title: data.title || '',
        tags: data.tags ? data.tags.split(',') : [],
        relativePath: `pages/${fileName}`,
        url: `pages/${fileName.slice(0, -3)}`,
        create: (new Date('Sat Nov 12 2022 17:25:15 GMT+0800')).getTime(),
        update: (new Date('Sat Nov 12 2022 17:25:15 GMT+0800')).getTime()
      })
    }
  })

  // 排序

  return pages
}