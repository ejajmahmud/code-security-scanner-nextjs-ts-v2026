# Production Container Specification for code-security-scanner-nextjs-ts-v2026
FROM alpine:3.19
RUN apk add --no-cache bash curl
WORKDIR /app
COPY . /app
EXPOSE 8080
CMD ["echo", "code-security-scanner-nextjs-ts-v2026 container environment ready."]
