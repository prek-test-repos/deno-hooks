async function run(): Promise<number> {
  const [subcommand] = Deno.args;

  switch (subcommand) {
    case "eval":
      console.log("This is a remote deno hook");
      return 0;
    case "semver": {
      const output = await new Deno.Command("semver-tool", {
        args: ["1.2.3"],
        stdout: "piped",
      }).output();

      await Deno.stdout.write(output.stdout);
      return output.code;
    }
    default:
      console.error(`unknown deno-hooks subcommand: ${subcommand ?? "<none>"}`);
      return 1;
  }
}

Deno.exit(await run());
