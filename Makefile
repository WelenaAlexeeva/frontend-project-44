install:
	npm ci
brain-games:
	node bin/brain-games.js
brain-even:
	node bin/brain-even.js
brain-calc:
	node bin/brain-calc.js
brain-gcd:
	node bin/brain-gcd.js
publish:
	npm publish --dry-run
lint:
	npx eslint .
lintfix:
	npx eslint --fix .
video:
	asciinema rec demo.cast --overwrite
videoup:
	asciinema upload demo.cast
.PHONY: test