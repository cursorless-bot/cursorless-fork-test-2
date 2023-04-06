import * as vscode from "vscode";
import { VscodeHats, VscodeIDE } from "..";

export async function createVscodeIde(context: vscode.ExtensionContext) {
  const vscodeIDE = new VscodeIDE(context);

  const hats = new VscodeHats(vscodeIDE, context);
  await hats.init();
  return { vscodeIDE, hats };
}
