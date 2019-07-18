# CUSTOM COURSE SITE

Custom course site on django framework

## Requirements

Use the package manager [pip](https://pip.pypa.io/en/stable/) to install requierement packages.

```bash
pip install -r req.txt
```

## Usage
1. Go to the project folder: 
    ```bash
    cd otus
    ```
2. Create database with migrating models: 
    ```python
   python manage.py migrate
    ```
    
3. Run server: 
    ```bash
    python manage.py runserver
    ```

4. Open course site in browser: 
    ```bash
    <server_address>/
    ```
5. Generate test data

    For generating test data follow this link: 
    **<server_address>/generate**


## Run webpack-dev-server

```bash
cd page
npm run proxy

> @ proxy /root/dj/page
> webpack-dev-server

> Project is running at http://localhost:3001/
> webpack output is served from /
> Hash: 6fd5e362ee0c77450bd5
> Version: webpack 3.12.0
> Time: 1407ms
>         Asset     Size  Chunks                    Chunk Names
> bundle.min.js   862 kB       0  [emitted]  [big]  main
>    index.html  2.78 kB          [emitted]         
>    [2] multi (webpack)-dev-server/client?http://localhost:3001 ./src/index.js 40 bytes {0} [built]
>    ....
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
