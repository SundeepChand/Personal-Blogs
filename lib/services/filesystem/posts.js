import fs from 'fs';
import path from 'path';
import yaml from 'js-yaml';

export function getAllPostsSortedByDate() {
  try {
    const indexFilePath = path.join(process.cwd(), 'data', 'blogs', 'index.yaml');

    const indexFileContent = fs.readFileSync(indexFilePath, 'utf8');

    const indexFile = yaml.load(indexFileContent);

    let blogDetails = [];

    indexFile.allBlogIds.forEach((blogId) => {
        const currentBlogPath = path.join(process.cwd(), 'data', 'blogs', `${blogId}.yaml`);

        const currentBlogContent = fs.readFileSync(currentBlogPath, 'utf8');

        const blogContentParsed = yaml.load(currentBlogContent);

        blogDetails.push({
          id: blogId,
          headerImageUrl: blogContentParsed.headerImageUrl,
          headerImageAltText: blogContentParsed.headerImageAltText,
          headerImageCaption: blogContentParsed.headerImageCaption,
          title: blogContentParsed.title,
          publishedAt: blogContentParsed.publishedAt,
          createdAt: blogContentParsed.createdAt,
          updatedAt: blogContentParsed.updatedAt,
          author: blogContentParsed.author,
          tags: blogContentParsed.tags,
          description: blogContentParsed.description,
        });
    });

    // The ordering of blogs in index.yaml is
    // in ascending order of created at.
    blogDetails = blogDetails.reverse();

    return blogDetails;
  } catch (error) {
    console.error(error);
  }
}

export function getPostIds() {
  try {
    const indexFilePath = path.join(process.cwd(), 'data', 'blogs', 'index.yaml');

    const indexFileContent = fs.readFileSync(indexFilePath, 'utf8');

    const indexFile = yaml.load(indexFileContent);

    return indexFile.allBlogIds;
  } catch (error) {
    console.log(error);
  }
}

export async function getAPostById(id) {
  try {
    const currentBlogPath = path.join(process.cwd(), 'data', 'blogs', `${id}.yaml`);

    const currentBlogContent = fs.readFileSync(currentBlogPath, 'utf8');

    let blogContentParsed = ''
    try {
      blogContentParsed = yaml.load(currentBlogContent);
    } catch (e) {
      console.log('Error in parsing blog contents:', e);
    }

    return {
      id,
      headerImageUrl: blogContentParsed.headerImageUrl,
      headerImageAltText: blogContentParsed.headerImageAltText,
      headerImageCaption: blogContentParsed.headerImageCaption,
      title: blogContentParsed.title,
      publishedAt: blogContentParsed.publishedAt,
      createdAt: blogContentParsed.createdAt,
      updatedAt: blogContentParsed.updatedAt,
      author: blogContentParsed.author,
      tags: blogContentParsed.tags,
      description: blogContentParsed.description,
      content: blogContentParsed.content,
    };
  } catch (error) {
    console.log(error);
  }
}
