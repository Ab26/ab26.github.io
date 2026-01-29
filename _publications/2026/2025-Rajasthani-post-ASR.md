---
title:          "Post-ASR Correction for Low-Resource Rajasthani Language"
date:           2026-01-24 00:01:00 +0530
selected:       true
pub:            "ACM Transactions on Asian and Low-Resource Language Information Processing (TALLIP)"
abstract: >-
  State-of-the-art multilingual Automatic Speech Recognition (ASR) models produce systematic errors when applied to lowresource languages like Rajasthani, for which they lack dedicated training data. This paper addresses this challenge by introducing a post-ASR correction framework that leverages the complementary error patterns in the outputs (termed as views) from two distinct models: Whisper-large-v3 and MMS-1B-All. We propose a multi-view1, character-level sequence-tosequence (Seq2Seq) model that uses a gated fusion mechanism to dynamically weigh information from the two ASR outputs. On a new benchmark created from the IndicTTS Rajasthani corpus, our gated model achieves a Character Error Rate (CER) of 7.86% and a Word Error Rate (WER) of 29.98%. This outperforms the best single-view baselines (8.01% CER and 30.33% WER), simple multi-view concatenation (8.21% CER and 30.05% WER), as well as Llama-3.2-3B and mBART-50-large, both fine-tuned on Whisper and MMS inputs. It also surpasses powerful Large Language Models (LLMs) like GPT-4o and Gemini 2.5 Pro in a zero-shot setting. This work establishes the first baseline for post-ASR correction in Rajasthani, demonstrating that a compact, specialized model is more effective than general-purpose LLMs for this targeted, low-resource task.

authors:
  - <strong>Abhishek Bhandari</strong> and Gaurav Harit
links:
      Paper: https://dl.acm.org/doi/pdf/10.1145/3793254
---
