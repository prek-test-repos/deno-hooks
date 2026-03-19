const cmd = new Deno.Command("prettier", {
  args: ["--version"],
  stdout: "piped",
});

const output = await cmd.output();
const version = new TextDecoder().decode(output.stdout).trim();
console.log(`Remote script via prettier ${version}`);
