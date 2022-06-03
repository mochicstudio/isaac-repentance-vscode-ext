import * as vscode from 'vscode';
import * as assert from 'assert';
import { getDocUri, activate } from './helper';

suite('Should do completion', () => {
  const docUri = getDocUri('completion.lua');

  test('Completes Enums in Lua file', async () => {
    await testCompletion(docUri, new vscode.Position(0, 0), {
      items: [
        { label: 'ActionTriggers', kind: vscode.CompletionItemKind.Enum },
        { label: 'ActiveSlot', kind: vscode.CompletionItemKind.Enum },
        { label: 'BabySubType', kind: vscode.CompletionItemKind.Enum },
        { label: 'BackdropType', kind: vscode.CompletionItemKind.Enum },
        { label: 'BatterySubType', kind: vscode.CompletionItemKind.Enum },
        { label: 'BedSubType', kind: vscode.CompletionItemKind.Enum },
        { label: 'BombSubType', kind: vscode.CompletionItemKind.Enum },
        { label: 'BombVariant', kind: vscode.CompletionItemKind.Enum },
        { label: 'ButtonAction', kind: vscode.CompletionItemKind.Enum },
        { label: 'CacheFlag', kind: vscode.CompletionItemKind.Enum },
        { label: 'Card', kind: vscode.CompletionItemKind.Enum },
        { label: 'Challenge', kind: vscode.CompletionItemKind.Enum },
        { label: 'ChampionColor', kind: vscode.CompletionItemKind.Enum },
        { label: 'ChestSubType', kind: vscode.CompletionItemKind.Enum },
        { label: 'CoinSubType', kind: vscode.CompletionItemKind.Enum },
        { label: 'DamageFlag', kind: vscode.CompletionItemKind.Enum },
        { label: 'Difficulty', kind: vscode.CompletionItemKind.Enum },
        { label: 'Direction', kind: vscode.CompletionItemKind.Enum },
        { label: 'DoorSlot', kind: vscode.CompletionItemKind.Enum },
        { label: 'DoorState', kind: vscode.CompletionItemKind.Enum },
        { label: 'DoorVariant', kind: vscode.CompletionItemKind.Enum },
        { label: 'EntityCollisionClass', kind: vscode.CompletionItemKind.Enum },
        { label: 'EntityFlag', kind: vscode.CompletionItemKind.Enum },
        { label: 'EntityGridCollisionClass', kind: vscode.CompletionItemKind.Enum },
        { label: 'EntityPartition', kind: vscode.CompletionItemKind.Enum },
        { label: 'EntityType', kind: vscode.CompletionItemKind.Enum },
        { label: 'GameStateFlag', kind: vscode.CompletionItemKind.Enum },
        { label: 'GridCollisionClass', kind: vscode.CompletionItemKind.Enum },
        { label: 'GridEntityType', kind: vscode.CompletionItemKind.Enum },
        { label: 'GridRooms', kind: vscode.CompletionItemKind.Enum }
      ]
    });
  });
});

async function testCompletion(
  docUri: vscode.Uri,
  position: vscode.Position,
  expectedCompletionList: vscode.CompletionList
) {
  await activate(docUri);

  // Executing the command `vscode.executeCompletionItemProvider` to simulate triggering completion
  const actualCompletionList = (await vscode.commands.executeCommand(
    'vscode.executeCompletionItemProvider',
    docUri,
    position
  )) as vscode.CompletionList;

  assert.ok(actualCompletionList.items.length >= 2);
  expectedCompletionList.items.forEach((expectedItem, i) => {
    const actualItem = actualCompletionList.items[i];
    assert.strictEqual(actualItem.label, expectedItem.label);
    assert.strictEqual(actualItem.kind, expectedItem.kind);
  });
}