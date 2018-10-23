import requests
import json
access_token='atvgm3tCcpKXzY4ehsBtJbexjWDSkodjl3X1zTj2GM14O9AGAZLX0dgkuruA'
headers={"Content-Type": "application/json"}
ret = requests.post('http://localhost:8001/api/deposits/items', params={'access_token': access_token },json={},headers=headers)
print("# Create deposit point")
print("## Result")
print(ret.json())
url = ret.json()['links']['files']
data = {'filename': 'README.rst'}
files = {'file': open('README.rst','rb')}
r = requests.post(url,params={'access_token': access_token },data=data,files=files)
print("# Upload a file")
print("## Result")
print(r.json())
url = 'http://localhost:8001'+ ret.json()['links']['index']
data={"filemeta":[{"filename":"README.rst","displaytype":"preview","licensetype":"license_0","accessrole":"open_access"}],"title_ja":"README.rst","title_en":"README.rst","lang":"ja","pubdate":"2018-08-04","keywords":"README.rst","keywords_en":"README.rst","$schema":"/items/jsonschema/6"}
r = requests.put(url,params={'access_token':access_token},data=json.dumps(data),headers={"Content-Type": "application/json"})
print("# Upload a metadata file")
print(data)
print("## Result")
print(r.json())
data={"index": ["1532296604272"],"actions": "publish"}
url=ret.json()['links']['self']
r = requests.put(url,params={'access_token':access_token},data=json.dumps(data),headers={"Content-Type": "application/json"})
print("# Publish an item")
print(data)
print("## Result")
print(r.json())

print("# Deposited an item")
url = "http://localhost:8001/records/"+str(r.json()['id'])+"/export/json"
r = requests.get(url,headers={"Content-Type": "application/json"})
print(r.json())


