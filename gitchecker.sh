#!/bin/bash
regex='.*up-to-date.*'
while [ true ]; do
	git fetch
	s=$(git status uno)
	if ! [[ $s =~ $regex ]] || [[ $(ls -A ../../share) ]]; then
		for i in $(pgrep -f node); do
			kill $i
		done
		git pull
		mv ~/share/* private
		npm start &
	fi
	sleep 1
done
