'use strict';
const { test } = require('node:test');
const assert = require('node:assert/strict');
const { readFileSync } = require('node:fs');
const { join } = require('node:path');
const { Script } = require('node:vm');
const html = readFileSync(join(__dirname, '../index.html'), 'utf8');
const url = 'https://github.com/Artins200/ArtoFIX-2.5/releases/download/2.5.2/ArtoFix.2.5.rar';
const sha256 = '5e3f4c3c7fd58b1c72bdf42ad1e94a030433ccc9dade10d70d893572c0161248';

test('product references and repository links use 2.5', () => {
  assert.doesNotMatch(html, /2\.3|Artofix\.23|\uFFFD/);
  assert.match(html, /<title>ArtoFIX 2\.5/);
  const links = [...html.matchAll(/href="(https:\/\/github\.com\/[^\"]+)"/g)];
  assert.ok(links.length >= 4);
  for (const [, link] of links) assert.ok(link.startsWith('https://github.com/Artins200/ArtoFIX-2.5'));
});
test('section anchors exist and IDs are unique', () => {
  const ids = [...html.matchAll(/\bid="([^"]+)"/g)].map(match => match[1]);
  assert.equal(new Set(ids).size, ids.length);
  for (const [, anchor] of html.matchAll(/href="#([^"]+)"/g)) assert.ok(ids.includes(anchor), anchor);
});
test('both download links point directly to the exact archive without JavaScript', () => {
  for (const id of ['download-link', 'download-link-2']) {
    assert.ok(html.includes(`<a href="${url}" id="${id}"`));
  }
  assert.match(html, /a\.href = trigger\.href;/);
});
test('published checksum, filename, size and verification command stay consistent', () => {
  assert.ok(html.includes(`<code class="checksum" id="download-sha256">${sha256}</code>`));
  assert.ok(html.includes('Get-FileHash -LiteralPath ".\\ArtoFix.2.5.rar" -Algorithm SHA256'));
  assert.ok(html.includes('86 462 032 байта'));
  assert.ok(html.includes('releases/tag/2.5.2'));
});
test('downloads are pinned, with no silent latest-release switch or API dependency', () => {
  assert.doesNotMatch(html, /ArtofixRelease|release\.js|api\.github\.com|fetch\(/);
  assert.doesNotMatch(html, /пока не опубликована|когда она будет опубликована|Установщик NSIS/);
});
test('friendly development copy offers feedback without unsupported promises', () => {
  assert.match(html, /id="feedback"/);
  assert.match(html, /Приложение находится в доработке/);
  assert.match(html, /Сообщить автору/);
  assert.match(html, /href="https:\/\/github\.com\/Artins200\/ArtoFIX-2\.5\/issues"/);
  assert.match(html, /не меняет IP/);
  assert.match(html, /не гарантирует анонимность/);
  assert.match(html, /не заменяет проверку антивирусом/);
  assert.doesNotMatch(html, /id="limitations"|Что мы не подтверждаем|Обход может не сработать|Ограничения и риски/);
  assert.doesNotMatch(html, /Профессиональный инструмент|Мультиаккаунтинг без рисков|data-count=|data-width=|Auto Updates/);
});
test('main content remains visible with JavaScript disabled', () => {
  assert.match(html, /<noscript><style>\.reveal \{ opacity: 1; transform: none;/);
});
test('inline JavaScript parses', () => {
  const scripts = [...html.matchAll(/<script>([\s\S]*?)<\/script>/g)];
  assert.equal(scripts.length, 1);
  for (const [, script] of scripts) assert.doesNotThrow(() => new Script(script));
});
