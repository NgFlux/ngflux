set -e

npm exec ng build @ngflux/ngflux

npm exec ng serve docs
