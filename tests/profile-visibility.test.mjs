import test from "node:test";
import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import { fileURLToPath } from "node:url";

const markdown = await readFile(
  fileURLToPath(new URL("../README.md", import.meta.url)),
  "utf8",
);

const renderedMarkdownSource = markdown.replace(/<!--.*?-->/gs, " ");
const hiddenResearchTerms =
  /ear-to-chest|ECG|\bSNNs?\b|Spiking(?: Neural Networks?| NN)?|neuromorphic|bio(?:medical )?signals?/i;

test("the rendered GitHub profile does not expose ECG/SNN research", () => {
  assert.doesNotMatch(renderedMarkdownSource, hiddenResearchTerms);
  assert.doesNotMatch(
    renderedMarkdownSource,
    /github\.com\/doan-duc\/ear-to-chest-ecg-reconstruction/i,
  );
});
