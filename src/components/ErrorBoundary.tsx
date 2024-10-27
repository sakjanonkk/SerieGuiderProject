'use client';

import { Component, ReactNode } from 'react';
import { Card, CardContent } from './ui/card';
import { Button } from './ui/button';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Card className="m-4">
          <CardContent className="p-6">
            <div className="text-center text-red-500">
              <p>เกิดข้อผิดพลาดในการโหลดข้อมูล</p>
              <Button 
                onClick={() => window.location.reload()} 
                className="mt-4"
              >
                โหลดใหม่
              </Button>
            </div>
          </CardContent>
        </Card>
      );
    }

    return this.props.children;
  }
}