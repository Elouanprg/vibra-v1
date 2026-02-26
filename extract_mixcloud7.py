import json

with open(r'C:\Users\eloua\.claude\projects\c--Users-eloua-Desktop-Claude-test-VIBRA-Site-v1\2cc7f5ff-d87c-4eed-80ac-4915fb3ec2c8.jsonl', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        if i == 603:
            data = json.loads(line)
            msg = data.get('message', {})
            content = msg.get('content', '')
            if isinstance(content, list):
                for j, block in enumerate(content):
                    if block.get('type') == 'text':
                        text = block.get('text', '')
                        if 'mixcloud' in text.lower() or 'player-widget' in text.lower():
                            print(f"Block {j}:")
                            print(text[:8000])
                            print()
