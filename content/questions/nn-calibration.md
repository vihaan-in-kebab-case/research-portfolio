---
question: "To what extent is a ResNet-18 trained on CIFAR-10 miscalibrated, and how effectively can post-hoc temperature scaling improve its confidence calibration without changing its classification accuracy?"
status: "exploring" # e.g. open, exploring, partially answered
date: "2026-10-02"
---
# Why it interests me:
The goal with this question is to reproduce the results of [On Calibration of Modern Neural Networks](https://arxiv.org/abs/1706.04599) on a small scale. This involves training a small ResNet on CIFAR-10, measuring expected calibration error (ECE) before and after applying temperature scaling, and plotting reliability diagrams to visualize the calibration.
