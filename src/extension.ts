import * as vscode from 'vscode';

export function activate(context: vscode.ExtensionContext) {
  console.log('Congratulations, your extension "isaac-repentance-api" is now active!');

  let disposable = vscode.commands.registerCommand('isaac-repentance-api.helloWorld', () => {
    vscode.window.showInformationMessage('Hello World from Isaac-Repentance-API!');
  });

  context.subscriptions.push(disposable);
}

export function deactivate() { }