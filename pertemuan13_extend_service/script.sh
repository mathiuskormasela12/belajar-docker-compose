# Create & Build image dengan extend service
docker compose -f docker-compose.yml -f docker-compose-prod.yml create

# Starting container dengan extend service
docker compose -f docker-compose.yml -f docker-compose-prod.yml start 