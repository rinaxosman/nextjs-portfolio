export type KaggleItem = {
  title: string;
  url: string;
  note?: string;
  tags?: ("Data Science" | "AI")[];
};

export const KAGGLE_NOTEBOOKS: KaggleItem[] = [
  {
    title: "The Movies Dataset",
    url: "https://www.kaggle.com/code/rinaosman/the-movies-dataset",
    note: "Clustering & recommendations from genres/ratings",
    tags: ["Data Science"],
  },
  {
    title: "Top 200 Universities in NA",
    url: "https://www.kaggle.com/code/rinaosman/top-200-universities-in-na-dataset-eda-part-2",
    note: "EDA — rankings, locations & trend insights",
    tags: ["Data Science"],
  },
  {
    title: "German Credit Dataset",
    url: "https://www.kaggle.com/code/rinaosman/german-credit-dataset-eda-part-1",
    note: "EDA — credit risk factors & distributions",
    tags: ["Data Science"],
  },
  {
    title: "Drug Classification Dataset",
    url: "https://www.kaggle.com/code/rinaosman/drug-classification-dataset",
    note: "Classification — predict drug type & evaluate",
    tags: ["Data Science"],
  },
  {
    title: "Heuristic Search (berlin52)",
    url: "https://www.kaggle.com/code/rinaosman/heuristic-search-berlin52-dataset",
    note: "TSP on berlin52 using greedy & 2-opt; route quality and runtime comparison.",
    tags: ["Data Science", "AI"],
  }
  ,
  {
    title: "Regression Empirical Study (Linear Regression)",
    url: "https://www.kaggle.com/code/rinaosman/regression-empirical-study-with-linear-regression",
    note: "Regression — linear modeling, evaluation & error analysis",
    tags: ["Data Science"],
  },
];