import re, json

with open(r'C:\Users\eloua\.claude\projects\c--Users-eloua-Desktop-Claude-test-VIBRA-Site-v1\2cc7f5ff-d87c-4eed-80ac-4915fb3ec2c8.jsonl', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        if 'player-widget.mixcloud.com' in line and '"type":"human"' in line:
            data = json.loads(line)
            msg = data.get('message', {})
            content = msg.get('content', '')
            print(f"=== Line {i}, type: {type(content).__name__} ===")
            if isinstance(content, str):
                # Find mixcloud context
                idx = content.lower().find('mixcloud')
                if idx >= 0:
                    print(content[max(0,idx-200):idx+500])
            elif isinstance(content, list):
                for block in content:
                    if isinstance(block, dict):
                        text = block.get('text', '') or block.get('content', '')
                        if text and 'mixcloud' in text.lower():
                            idx = text.lower().find('mixcloud')
                            print(text[max(0,idx-200):idx+500])
            print()
