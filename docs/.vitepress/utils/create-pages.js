import fs from 'fs'
import path from 'path'
import childProcess from 'child_process'
import matter from 'gray-matter'

const execSync = childProcess.execSync;

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
      console.log('filePath', filePath);
      console.log('create', execSync(`echo "$(git log --pretty=format:"%ad" -- ${filePath} | tail -1)"`, {encoding: "utf-8"}));
      // 获取文件创建和更新时间
      let update = execSync(`echo "$(git log -1 --pretty=format:"%ad" -- ${filePath})"`, {encoding: "utf-8"});
      let create = execSync(`echo "$(git log --pretty=format:"%ad" -- ${filePath} | tail -1)"`, {encoding: "utf-8"});
      update = update.trim() ? update.trim() : Date.now();
      create = create.trim() ? create.trim() : Date.now();

      pages.push({
        title: data.title || '',
        tags: data.tags ? data.tags.split(',') : [],
        relativePath: `pages/${fileName}`,
        url: `pages/${fileName.slice(0, -3)}`,
        create: (new Date(create)).getTime(),
        update: (new Date(update)).getTime()
      })
    }
  })

  // 排序
  pages.sort((a, b) => b.create - a.create);
  return pages
}