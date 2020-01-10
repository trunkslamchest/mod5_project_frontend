-remove " gem 'wdm', '>= 0.1.0' " from Gemfile
-remove "  wdm (>= 0.1.0) " from Gemfile.lock

-bundle install
-npm install

-rails db:migrate

-rvm use ruby-2.6.5

-rvm --default use 2.6.5