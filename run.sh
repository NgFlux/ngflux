set -e

pnpm exec ng build ngflex

pnpm exec ng serve docs
