# CLEAN
clean-ds-store:
	@echo "REMOVING all .DS_Store files"
	@rm -rfv .DS_Store & rm -rfv */.DS_Store & rm -rfv */*/.DS_Store & rm -rfv */*/*/.DS_Store & rm -rfv */*/*/*/.DS_Store

clean-server-dist:
	@rm -rfv server/dist/*

# INSTALL
install:
	@npm install
	@npm run compile
	@docker-compose --env-file ./docker/.env -f ./docker/docker-compose.yml up -d --build
