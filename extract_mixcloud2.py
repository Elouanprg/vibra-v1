import re, json

with open(r'C:\Users\eloua\.claude\projects\c--Users-eloua-Desktop-Claude-test-VIBRA-Site-v1\2cc7f5ff-d87c-4eed-80ac-4915fb3ec2c8.jsonl', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        if 'player-widget.mixcloud.com' in line and '"type":"human"' in line:
            data = json.loads(line)
            msg = data.get('message', {})
            content = msg.get('content', '')
            if isinstance(content, list):
                for block in content:
                    if isinstance(block, dict) and block.get('type') == 'text':
                        text = block.get('text', '')
                        if 'mixcloud' in text.lower():
                            print(f"=== Line {i} ===")
                            print(text[:3000])
                            print()
            elif isinstance(content, str) and 'mixcloud' in content.lower():
                print(f"=== Line {i} (string) ===")
                print(content[:3000])
                print()
