#!/bin/bash
warning() {
    text="# $1 #"
    echo "$text" | sed "s/./#/g"
    echo "$text"
    echo "$text" | sed "s/./#/g"
}

current_branch=$(git branch | grep ^\* | cut -d' ' -f2-)
wanted_branch=$1
[ "$1" ] || wanted_branch=$current_branch

git checkout "$wanted_branch" && {
    git pull
    rm -rf ../google
    mkdir ../google
    lein cljsbuild once "prod"
    cp -r resources/public/* ../google
    git checkout gh-pages && {
        git pull
        git rm -rf .html index.html fonts js css
        rm -rf *
        cp -r ../google/* .
        rm -rf ../google/
        git add *
        git commit -m "New UI - $(date) by $USER"
        git push
    } || {
        warning "Error, cannot checkout to gh-pages branch"
        rm -rf ../google
    }
    git checkout "$current_branch"
} || {
    warning "Error, cannot checkout to $wanted_branch branch"
    rm -rf ../google
}
