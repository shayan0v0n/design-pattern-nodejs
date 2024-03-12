import { EventEmitter } from "events";
import { readFile, readdirSync } from "fs";

type findRegexArgs = { fileList: string[]; regex: string | RegExp };

const findRegex = ({ fileList, regex }: findRegexArgs): EventEmitter => {
  const emitter = new EventEmitter();

  for (const file of fileList) {
    readFile(file, "utf8", (err, content) => {
      if (err) return emitter.emit("error", err);

      emitter.emit("fileread", file);
      const match = content.match(regex);
      if (match) match.forEach((elem) => emitter.emit("found", file, elem));
    });
  }

  return emitter;
};

const regex = /1.10.32 \w+/g;
const fileList = readdirSync("./files").map((file) => `./files/${file}`);

findRegex({ fileList, regex })
  .on("fileread", (file) => console.log(`${file} was read`))
  .on("found", (file, match) => console.log(`Matched "${match}"`))
  .on("error", (err) => console.error(`Error emitted ${err.message}`));
