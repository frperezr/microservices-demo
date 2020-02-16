# Architecture

![Alt text](images/architecture.png?raw=true "Architecture")

# Init submodules

```
git submodule update --init
```

# Install docker

```
brew install docker
```

# Install minikube

```
brew install minikube
brew install docker-machine-driver-hyperkit
brew install hyperkit
```

# Install skaffold

```
brew install skaffold
```

# Install protobuff

```
brew install protobuf
```

# Install k9s

```
brew install derailed/k9s/k9s
```

# Install Go (Optional)

Follow instructions from https://golang.org/doc/install

# Install protoc-gen-go (Optional)

```
go get -u github.com/golang/protobuf/protoc-gen-go
```

# Make proto file (Optional)

```
make proto
```

# Setup Budgets API

```
cd src/budgets-api && make i && make b && cd ../..
```

# Setup Countries API

```
cd src/countries-api && make i && make b && make s && cd ../..
```

# Start minikube

```
minikube start --memory=16384 --cpus=4
```

# Run skaffold

```
skaffold dev --port-forward
```

# Gateway API

```
localhost:4000
```

# Countries API

```
localhost:3030
```

# Users API

```
localhost:3050
```

# Auth API

```
localhost:3020
```

# Budgets API

```
localhost:3040
```

# Delete All

```
minikube delete
```
