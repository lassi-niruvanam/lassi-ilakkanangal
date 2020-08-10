import json


def compiler(langue_o=None, langue_h=None):
    lh = langue_h or langues()
    lo = langue_o or langues_ordi()
    for o in lo:
        for h in lh:
            compile_trad(o, h)
            # Recompiler documents traductions si nécessaire
            # Compiler .lark traduit (moins les chiffres) si nécessaire


def compile_trad(o, h):
    d = doc_trad(o, h)
    d_g = doc_grammaire(o)
    # si hash dans d != hash de d_g, o si pas de d, recompiler
    if os.path.isfile(d):
        with open(d, 'r', encoding='utf8') as f:
            dict_trad = json.load(f)
    else:
        dict_trad = {
            "règles": [],
            "mots réservés": []
        }
    r = règles(o)
    m = mots_réservés(o)
    dict_trad["hash_grammaire"] = hash(txt_grammaire)

