import json, re

with open(r'C:\Users\eloua\.claude\projects\c--Users-eloua-Desktop-Claude-test-VIBRA-Site-v1\2cc7f5ff-d87c-4eed-80ac-4915fb3ec2c8.jsonl', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        if i == 603:
            data = json.loads(line)
            msg = data.get('message', {})
            content = msg.get('content', '')
            if isinstance(content, list):
                for j, block in enumerate(content):
                    btype = block.get('type', '?')
                    if btype == 'thinking':
                        text = block.get('thinking', '')
                        if 'player-widget' in text:
                            # Print lines around player-widget mentions
                            lines = text.split('\n')
                            for k, l in enumerate(lines):
                                if 'player-widget' in l or 'mixcloud' in l.lower():
                                    start = max(0, k-3)
                                    end = min(len(lines), k+3)
                                    for ll in lines[start:end]:
                                        print(ll)
                                    print("---")
