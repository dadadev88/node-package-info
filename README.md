# Node Package Information

Get information from package JSON

## Inputs

### `path`

Package JSON path, including filename. By default is `package.json` from root path

## Outputs

### `name`
Package version
### `version`
Package name

## Example usage

```yaml
steps:
  - name: Checkout to repository
    uses: actions/checkout@v4 # It's required to get repository where is package.json

  - name: Getting package information
    uses: dadadev88/node-package-info@v1.0.0
    id: node-package-info # You can put your own id
    with:
      path: 'package.json'

  - name: Print package information
    run: |
      echo "Package name: ${{ steps.node-package-info.outputs.name }}"
      echo "Package version: ${{ steps.node-package-info.outputs.version }}"
```
