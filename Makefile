.PHONY: install brain-games publish link

install:
	npm ci

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

link:
	sudo npm link

make lint:
	npx eslint
brain-even:
	node bin/brain-even
brain-calc:
	node bin/brain-calc