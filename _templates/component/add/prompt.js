module.exports = {
  prompt: ({ inquirer }) => {
    return inquirer
      .prompt([
        {
          type: "select",
          name: "category",
          message: "コンポーネント種別を教えてください！",
          choices: ["shared", "pages"],
          initial: "pages",
        },
        {
          type: "input",
          name: "directory",
          message: `どこのディレクトリに作りますか？`,
          validate: (directory) => {
            if (!directory) {
              return "必須です！";
            }

            if (!/^[a-zA-Z]*$/.test(directory)) {
              return "英語のみが使えます！";
            }

            return true;
          },
        },
        {
          type: "input",
          name: "name",
          message: "コンポーネントの名前を教えてください！",
          validate: (name) => {
            if (!name) {
              return "必須です！";
            }

            if (!/^[a-zA-Z]*$/.test(name)) {
              return "英語のみが使えます！";
            }

            return true;
          },
        },
        {
          type: "confirm",
          name: "props",
          message: "Propsは必要ですか？",
          choices: ["Yes", "No"],
          initial: "Yes",
        },
      ])
      .then((answers) => {
        const { category, directory, props } = answers;

        const path = `${category}/${directory}`;
        const _path = `src/components/${path}`;
        const aliasPath = `@/components/${path}`;
        const componentType = props ? "React.FC<Props>" : "React.FC";

        return {
          ...answers,
          path,
          _path,
          aliasPath,
          componentType,
        };
      });
  },
};
