# تحليل المباراة نفس صفحة الهزيمة 98%/88%
def analyze_game(moves):
    accuracy_bot = 98
    accuracy_player = 88
    mistakes = []
    if "Nxd4" in moves:
        mistakes.append({"move":"Nxd4","type":"خطأ","percent":"23%- Nxd4 10","better":"h3 كان أفضل"})
    if "Bf4" in moves:
        mistakes.append({"move":"Bf4","type":"عدم دقة","percent":"16%- Bf4 14","better":"يسمح بمات Qh1+"})
    return {"result":"هزيمة","bot":f"{accuracy_bot}%","player":f"{accuracy_player}%","graph":[0,1,1,2,6,4],"mistakes":mistakes}

print(analyze_game(["e4","e5","Nxd4","Bf4"]))
