---
date: "2026-10-05"
objective: "Planning and beginning work on 2 new projects to help strengthen my understanding of LLMs and NLP. The two projects are: a small-scale implementation of the results from On Calibration of Modern Neural Networks(https://arxiv.org/abs/1706.04599) and exploration of Indic Tokenizer Flexibility." 
hypothesis: "Planning these projects now, alongside my main research, will help me gain a broader understanding of the current LLM landscape, which will allow me to better contextualize my own research within the current body of work."
next_steps: "Allocate time and resources efficiently to balance these projects, my Honours research, and my freelance venture alongside the standard coursework."
---
# Project 1: Reproducing “On Calibration of Modern Neural Networks”

The core finding of Guo et al. (2017) is that modern deep networks tend to be overconfident, and that a simple fix, temperature scaling, mostly repairs it. This project makes me reproduce that on a small scale. Initial steps:
1. Train a small ResNet on CIFAR-10 on Kaggle, holding out a validation split for calibration.
2. Measure expected calibration error (ECE) and plot reliability diagrams.
3. Apply temperature scaling on the validation split and re-measure on the test set.
4. If time allows, repeat on a corrupted test set (CIFAR-10-C) to show calibration degrading under shift.
In the README, I plan to report ECE before and after, and report honestly where my numbers match the paper and where they differ. The goal is to get a feel for the basics of both calibration and deep learning.

# Project 2: Indic Tokenizer Flexibility

Tokenizers trained mostly on English often split Indic scripts into many small pieces, which makes models slower and costlier for those languages. This project is to measure how bad it is. Initial steps:
1. Pick English plus three Indian languages (including one I read myself, so I can sanity-check outputs). Use Wikipedia text for each.
2. Train BPE and unigram tokenizers with SentencePiece at a few vocabulary sizes (say 8k, 16k, 32k).
3. Measure fertility (average tokens per word) for each language and setting.
4. Compare against the tokenizers of an existing multilingual model and an English-centric LLM to show how much worse they do on Indic text.
5. Include a few concrete examples of badly fragmented words, plus a short paragraph on why Indic scripts fragment. Again, the goal is to get a feel for the basics of the topic and current practices in NLP.