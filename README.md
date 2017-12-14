# PatientServicesNode

A node service which exposes apis to fetch and save patients and their demographic and their clinical data

# Starting the App

npm run start

this will also create an in-memory json store

## Patient Services

### Saving a Patient
curl -X POST \
  http://localhost:3000/patients \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 97801a9f-3acf-87d7-d495-0e3db6562647' \
  -d '{
	"name": "John Doe",
	"age": 63,
	"ssn": "123-321-1234" 
}'

### Getting all Patients

curl -X GET \
  http://localhost:3000/patients \
  -H 'cache-control: no-cache' \
  -H 'content-type: application/json' \
  -H 'postman-token: 87327374-8cf2-459a-bed9-7c8d4bf11ae4' \

