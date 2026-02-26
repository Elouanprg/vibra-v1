import json

with open(r'C:\Users\eloua\.claude\projects\c--Users-eloua-Desktop-Claude-test-VIBRA-Site-v1\2cc7f5ff-d87c-4eed-80ac-4915fb3ec2c8.jsonl', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        if i in (597, 604, 606, 609):
            data = json.loads(line)
            msg = data.get('message', {})
            content = msg.get('content', '')
            print(f"=== Line {i} ===")
            if isinstance(content, list):
                for block in content:
                    if isinstance(block, dict) and block.get('type') == 'text':
                        text = block.get('text', '')
                        if 'mixcloud' in text.lower() or 'player-widget' in text.lower() or 'iframe' in text.lower():
                            print(text[:5000])
                    elif isinstance(block, str):
                        if 'mixcloud' in block.lower():
                            print(block[:5000])
            elif isinstance(content, str):
                if 'mixcloud' in content.lower() or 'player-widget' in content.lower():
                    print(content[:5000])
            print()
