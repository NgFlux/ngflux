set -e

pnpm exec ng build @ngflux/ngflux

pnpm exec ng serve docs
