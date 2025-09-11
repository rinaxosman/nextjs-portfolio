export type KaggleItem = {
  title: string;
  url: string;
  note?: string;
};

export const KAGGLE_NOTEBOOKS: KaggleItem[] = [
  {
    title: "The Movies Dataset",
    url: "https://www.kaggle.com/code/rinaosman/the-movies-dataset",
    note: "Genres, ratings & metadata insights",
  },
  {
    title: "Top 200 Universities in NA — EDA",
    url: "https://www.kaggle.com/code/rinaosman/top-200-universities-in-na-dataset-eda-part-2",
    note: "Exploratory analysis & visuals",
  },
  {
    title: "German Credit Dataset — EDA",
    url: "https://www.kaggle.com/code/rinaosman/german-credit-dataset-eda-part-1",
    note: "Feature distributions & risk factors",
  },
  {
    title: "Heuristic Search (berlin52)",
    url: "https://www.kaggle.com/code/rinaosman/heuristic-search-berlin52-dataset",
    note: "AI/heuristic search on TSP",
  },
  {
    title: "Drug Classification Dataset",
    url: "https://www.kaggle.com/code/rinaosman/drug-classification-dataset",
    note: "Patient attributes & class balance",
  },
];
