# CLEAN
clean-ds-store:
	@echo "REMOVING all .DS_Store files"
	@rm -rfv .DS_Store & rm -rfv */.DS_Store & rm -rfv */*/.DS_Store & rm -rfv */*/*/.DS_Store & rm -rfv */*/*/*/.DS_Store

clean-server-dist:
	@rm -rfv server/dist/*

# INSTALL
install: clean-server-dist
# @cp -rfv ./dashboard/source/* ./server/dist/
# @cp -rfv ./library/source ./server/dist/library/
	@bash server/.bash install
