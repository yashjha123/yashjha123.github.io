ans = []
ans2 = []
end = 0
with open("style.css", "r") as file:
    for x in file:
        #contents =file[x]
        #print(x)
        if((x.startswith('.cub') and ('t' not in x) and ('k' not in x) and ('p' not in x) and ('f' not in x)) or (('transform:' in x) and end == 1)):
            
            if(end==1):
                end = 0
            p = x
            if('translate3D' in x):
                p = x.split('translate3D(')[1]
                p = p.split(')')[0]
                ans2.append(p)
            else:
                ans.append(p.rstrip().replace(' {','').replace('.c','c'))
        if((x.startswith('.cub') and ('t' not in x) and ('k' not in x) and ('p' not in x) and ('f' not in x))):
           end=1
#print(ans)
out = []
"""for x in range(len(ans)):
    if x%2==0:
        out.append('"'+ans[x]+'",')
    else:
        out.append('"value":'+' "'+ans[x]+'", ')
"""
#print(out)
