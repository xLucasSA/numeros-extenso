# API Fiscal.io

link da api: ec2-18-117-89-11.us-east-2.compute.amazonaws.com

### Endpoints

```
/number
```

- Ok response:

  - método: **POST**
  - body:

  ```json
  {
    "number": 123
  }
  ```

  - response:

  ```json
  {
    "message": "cento e vinte e três"
  }
  ```

- NOT OK response:
  - método: **POST**
  - body:
  ```json
  {
    "number": 123
  }
  ```
  - response:
  ```json
  {
    "message": "cento e vinte e três"
  }
  ```
