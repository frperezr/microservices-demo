proto p:
	@echo "[proto] Generating proto file..."
	@CGO_ENABLED=0 go generate ./...

.PHONY: proto