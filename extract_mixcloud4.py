import json

with open(r'C:\Users\eloua\.claude\projects\c--Users-eloua-Desktop-Claude-test-VIBRA-Site-v1\2cc7f5ff-d87c-4eed-80ac-4915fb3ec2c8.jsonl', 'r', encoding='utf-8') as f:
    for i, line in enumerate(f, 1):
        if 'player-widget.mixcloud.com' in line:
            data = json.loads(line)
            tp = data.get('type', 'unknown')
            msg_type = data.get('message', {}).get('role', 'no-role')
            print(f"Line {i}: type={tp}, role={msg_type}")
