# Using ngrok to Expose RabbitMQ

You can expose any TCP port via ngrok. For RabbitMQ, you'll want to expose **port 5672 (AMQP)** and optionally **15672 (management UI)**.

## 1. Install ngrok

If you haven't installed ngrok yet:

```bash
# Mac
brew install ngrok

# Ubuntu
sudo snap install ngrok
```

## 2. Expose the RabbitMQ AMQP port

```bash
ngrok tcp 5680
```

ngrok will give you a forwarding address like:

```
tcp://0.tcp.ngrok.io:12345
```

This is what external clients will use as the RabbitMQ host and port:

```
amqp://user:pass@0.tcp.ngrok.io:12345
```

## 3. Optional: Expose the Management UI

```bash
ngrok http 15800
```

You'll get a public URL like `https://abcd1234.ngrok.io` to access the management UI from a browser.

## 4. Notes

-   Node app inside Docker doesn't need to change its RABBITMQ_URL if it still talks to the rabbitmq container internally.
-   External clients (or someone outside your LAN) need to use the ngrok TCP endpoint.
-   If you restart ngrok, the public address will change unless you have a paid account with a reserved TCP address.
-   Update the RABBITMQ_URL for the workers, and the vercel env
