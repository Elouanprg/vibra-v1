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
                        if 'mixcloud' in text.lower() or 'player-widget' in text.lower():
                            # Find all player-widget URLs in thinking
                            import re
                            urls = re.findall(r'https://player-widget\.mixcloud\.com[^\s"<>]+', text)
                            for u in urls:
                                print(u)
                    elif btype == 'tool_use':
                        inp = json.dumps(block.get('input', {}))
                        if 'mixcloud' in inp.lower() or 'player-widget' in inp.lower():
                            urls = re.findall(r'https://player-widget\.mixcloud\.com[^\s"<>]+', inp)
                            for u in urls:
                                print(u)
