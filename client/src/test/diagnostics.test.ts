import * as vscode from 'vscode';
import * as assert from 'assert';
import { getDocUri, activate } from './helper';

suite('Should get diagnostics', () => {
  const docUri = getDocUri('diagnostics.lua');

  test('Diagnoses uppercase texts', async () => {
    await testDiagnostics(docUri, [

    ]);
  });
});

function toRange(sLine: number, sChar: number, eLine: number, eChar: number) {
  const start = new vscode.Position(sLine, sChar);
  const end = new vscode.Position(eLine, eChar);
  return new vscode.Range(start, end);
}

async function testDiagnostics(docUri: vscode.Uri, expectedDiagnostics: vscode.Diagnostic[]) {
  await activate(docUri);

  const actualDiagnostics = vscode.languages.getDiagnostics(docUri);

  assert.strictEqual(actualDiagnostics.length, expectedDiagnostics.length);

  expectedDiagnostics.forEach((expectedDiagnostic, i) => {
    const actualDiagnostic = actualDiagnostics[i];
    assert.strictEqual(actualDiagnostic.message, expectedDiagnostic.message);
    assert.deepStrictEqual(actualDiagnostic.range, expectedDiagnostic.range);
    assert.strictEqual(actualDiagnostic.severity, expectedDiagnostic.severity);
  });
}