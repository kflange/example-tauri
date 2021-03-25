# example-tauri


## cashe の注意
1. webpack (dist direcotry に index.html, index.js が生成される。)
2. tauri build
3. rm -rf dist
4. tauri build (なぜか build が通る。なぜか新しい executable が作成される。)

* dist directory がない場合： どこかにある cache を参照する。
* dist directory がある場合： 都度更新する。



## 1. npm run
### 1. build
```
$ run webpack
```


### 2. bundle
```
$ run tauri build 
```
build exe package.


### 3. clean
```
$ run rimraf dist
```
clean dist directory.

running in tauri server


### 4. dev:tauri
```
$ run clean && bundle && tauri dev
```
running in tauri server


#### 4. old
```
$ run tauri dev
```


### 5. dev:webpack
```
$ run webpack-cli serve --mode development
```
running in localhost server



### 6. start
```
$ run clean && bundle &&
```
running in localhost server ?

#### old
```
$ run webpack serve
```
running in localhost server ?