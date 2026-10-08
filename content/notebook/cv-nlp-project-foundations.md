---
date: "2026-10-08"
objective: "Setting up intentional folder structures and designing initial pipeline for the document rectification pipeline and the artifact for first paper"
hypothesis: "A modular approach and an intentional design of the pipeline will result in a more robust system, and will allow for easier debugging and pinpointing specific components to improve upon"
next_steps: "Design each component one by one individually for both projects simultaneously"
---

# For the Document Rectification Pipeline:
document-rectification/
├── README.md
├── pyproject.toml
├── requirements.txt
│
├── data/
│   ├── raw/
│   ├── processed/
│   └── README.md
│
├── src/
│   └── docrect/
│       ├── io/
│       ├── preprocessing/
│       │   ├── grayscale.py
│       │   ├── gaussian.py
│       │   └── normalization.py
│       ├── edges/
│       │   ├── gradients.py
│       │   ├── sobel.py
│       │   ├── nonmax_suppression.py
│       │   └── hysteresis.py
│       ├── segmentation/
│       │   ├── threshold.py
│       │   ├── morphology.py
│       │   └── connected_components.py
│       ├── geometry/
│       │   ├── contours.py
│       │   ├── polygon.py
│       │   ├── corners.py
│       │   ├── lines.py
│       │   └── homography.py
│       ├── rectification/
│       │   ├── transform.py
│       │   ├── interpolation.py
│       │   └── warp.py
│       ├── learning/
│       │   ├── dataset.py
│       │   ├── model.py
│       │   ├── train.py
│       │   └── inference.py
│       └── pipeline.py
│
├── notebooks/
│   ├── 01_visual_exploration.ipynb
│   ├── 02_classical_pipeline.ipynb
│   ├── 03_learning_pipeline.ipynb
│   └── 04_failure_analysis.ipynb
│
├── experiments/
│   ├── 01_preprocessing/
│   ├── 02_edge_detection/
│   ├── 03_segmentation/
│   ├── 04_corner_detection/
│   ├── 05_homography/
│   ├── 06_learning/
│   └── 07_classical_vs_learning/
│
├── ablations/
│   ├── preprocessing/
│   ├── edge_detection/
│   ├── segmentation/
│   ├── corner_detection/
│   ├── homography/
│   └── learning/
│
├── benchmarks/
│   ├── datasets/
│   ├── metrics/
│   └── evaluate.py
│
├── results/
│   ├── figures/
│   ├── predictions/
│   ├── tables/
│   └── logs/
│
└── docs/
    ├── methodology.md
    ├── experiments.md
    └── decisions.md

# For the NLP Publication Project:
sfgv-rag/
│
├── README.md
├── pyproject.toml
├── uv.lock
├── .gitignore
├── .pre-commit-config.yaml
│
├── configs/
│   ├── base.yaml
│   │
│   ├── models/
│   │   ├── qwen.yaml
│   │   ├── llama.yaml
│   │   └── mistral.yaml
│   │
│   ├── retrieval/
│   │   ├── dense.yaml
│   │   ├── sparse.yaml
│   │   └── hybrid.yaml
│   │
│   ├── graph/
│   │   ├── fixed.yaml
│   │   └── adaptive.yaml
│   │
│   ├── verification/
│   │   └── sfgv.yaml
│   │
│   └── experiments/
│       ├── baseline.yaml
│       ├── full.yaml
│       └── ablations.yaml
│
├── src/
│   └── sfgv/
│       │
│       ├── pipeline/
│       │   ├── pipeline.py
│       │   ├── stages.py
│       │   └── types.py
│       │
│       ├── query/
│       │   ├── classifier.py
│       │   ├── features.py
│       │   └── labels.py
│       │
│       ├── retrieval/
│       │   ├── retriever.py
│       │   ├── dense.py
│       │   ├── sparse.py
│       │   ├── hybrid.py
│       │   └── reranker.py
│       │
│       ├── graph/
│       │   ├── builder.py
│       │   ├── extractor.py
│       │   ├── expansion.py
│       │   ├── adaptive.py
│       │   ├── fixed.py
│       │   └── provenance.py
│       │
│       ├── generation/
│       │   ├── generator.py
│       │   ├── prompts.py
│       │   └── claim_decomposition.py
│       │
│       ├── verification/
│       │   ├── verifier.py
│       │   ├── graph_verification.py
│       │   ├── source_verification.py
│       │   ├── path_selection.py
│       │   └── decision.py
│       │
│       ├── confidence/
│       │   ├── features.py
│       │   ├── decs.py
│       │   ├── calibration.py
│       │   └── abstention.py
│       │
│       ├── evaluation/
│       │   ├── qa_metrics.py
│       │   ├── verification_metrics.py
│       │   ├── faithfulness_metrics.py
│       │   ├── calibration_metrics.py
│       │   ├── efficiency_metrics.py
│       │   └── statistical_tests.py
│       │
│       └── data/
│           ├── schemas.py
│           ├── loaders.py
│           ├── preprocessing.py
│           └── splits.py
│
├── experiments/
│   │
│   ├── baselines/
│   │   ├── closed_book.py
│   │   ├── flat_rag.py
│   │   ├── text_verification.py
│   │   ├── static_graphrag.py
│   │   └── graph_only_verification.py
│   │
│   ├── main/
│   │   ├── run_hotpotqa.py
│   │   └── run_2wiki.py
│   │
│   ├── ablations/
│   │   ├── README.md
│   │   ├── definitions.yaml
│   │   └── run_ablation.py
│   │
│   ├── robustness/
│   │   ├── missing_evidence.py
│   │   ├── contradictory_evidence.py
│   │   ├── graph_corruption.py
│   │   ├── relation_reversal.py
│   │   └── distractor_evidence.py
│   │
│   └── calibration/
│       ├── fit_calibrator.py
│       └── evaluate_risk_coverage.py
│
├── ablations/
│   ├── README.md
│   ├── component_matrix.md
│   ├── results/
│   └── analysis/
│
├── research/
│   ├── research_questions.md
│   ├── hypotheses.md
│   ├── novelty.md
│   ├── design_choices.md
│   ├── assumptions.md
│   ├── limitations.md
│   │
│   ├── literature/
│   │   ├── reading_list.md
│   │   ├── literature_matrix.csv
│   │   └── paper_notes/
│   │
│   └── decisions/
│       ├── 001_retrieval.md
│       ├── 002_graph_representation.md
│       ├── 003_claim_decomposition.md
│       ├── 004_verification.md
│       └── 005_confidence.md
│
├── notebooks/
│   ├── 01_data_exploration.ipynb
│   ├── 02_retrieval_analysis.ipynb
│   ├── 03_graph_analysis.ipynb
│   ├── 04_verification_analysis.ipynb
│   ├── 05_confidence_analysis.ipynb
│   ├── 06_ablation_analysis.ipynb
│   └── 07_final_results.ipynb
│
├── tests/
│   ├── unit/
│   │   ├── test_query_classifier.py
│   │   ├── test_retrieval.py
│   │   ├── test_graph.py
│   │   ├── test_verification.py
│   │   └── test_decs.py
│   │
│   ├── integration/
│   │   ├── test_pipeline.py
│   │   └── test_baselines.py
│   │
│   └── fixtures/
│       ├── toy_documents.json
│       ├── toy_graph.json
│       └── toy_queries.json
│
├── data/
│   ├── raw/
│   ├── interim/
│   ├── processed/
│   └── README.md
│
├── outputs/
│   ├── predictions/
│   ├── graphs/
│   ├── explanations/
│   ├── metrics/
│   ├── figures/
│   └── logs/
│
└── scripts/
    ├── download_data.py
    ├── preprocess_data.py
    ├── build_index.py
    └── run_experiment.py