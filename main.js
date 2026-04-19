// DFS
function dfs(g, u, vis=new Set()) {
    vis.add(u);
    console.log(u);
    for(let v of g[u])
        if(!vis.has(v))
            dfs(g,v,vis);
}
// DAG sort
function topo(g) {
    let indeg = {};
    for (let u in g) {
        indeg[u] ||= 0;
        for (let v of g[u])
            indeg[v] = (indeg[v]||0)+1;
    }

    let q = Object.keys(indeg).filter(k=>indeg[k]==0);

    while(q.length){
        let u=q.shift();
        console.log(u);
        for(let v of g[u]){
            if(--indeg[v]==0) q.push(v);
        }
    }
}
